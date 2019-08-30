// example
var extractShape = (data, rules) => applyRule(data, rules.shape)
var extractDimensions = (data, rules) => applyRule(data, rules.dimensions)
var populateWidget = (data, rules) => ({
  shape: extractShape(data, rules),
  dimensions: extractDimensions(data, rules)
})
var getWidgetDetails = (req, res) => {
  var { id, type } = req.body
  var data = lookupData(id)
  var rules = lookupRules(type)
  return res.json(populateWidget(data, rules))
}
// cleaner way
var widgetPopulator = (id, type) => {
  var data = lookupData(id)
  var { shape, dimensions } = lookupRules(type)
  var extractShape = () => applyRule(data, shape)
  var extractDimensions = () => applyRule(data, dimensions)
  return {
    shape: extractShape(),
    dimensions: extractDimensions()
  }
}
var getWidgetDetails = (req, res) => {
  var { id, type } = req.body
  return res.json(widgetPopulator(id, type))
}
// 如果我们这样使用
// 其实 type 是固定的，这样就导致了，lookupRules 被重复调用了多次，如果 lookupRules 需要异步请求，或者比较消耗资源，那么重复调用这么多次其实就很没有必要了
var getAllWidgetDetails = (req, res) => {
  var { ids, type } = req.body
  var widgets = ids.map(id => widgetPopulator(id, type))
  return res.json(widgets)
}
// 如何改写
// 关键：柯里化
// 非常完美了
// 如何学习改写成这样，首先要知道怎么使用改写后的 widgetPopulator
var widgetPopulator = (type) => {
  var { shape, dimensions } = lookupRules(type)
  return (id) => {
    var data = lookupData(id)
    var extractShape = () => applyRule(data, shape)
    var extractDimensions = () => applyRule(data, dimensions)
    return {
      shape: extractShape(),
      dimensions: extractDimensions()
    }
  }
}
var getWidgetDetails = (req, res) => {
  var { id, type } = req.body
  return res.json(widgetPopulator(type)(id))
}
var getAllWidgetDetails = (req, res) => {
  var { ids, type } = req.body
  var populatorForType = widgetPopulator(type)
  var widgets = ids.map(id => populatorForType(id))
  return res.json(widgets)
}