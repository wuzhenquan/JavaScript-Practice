function LinkedList(){
    var Node = function(element){
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

    this.append = function(element){
        var node = new Node(element)
        var current
        if (head === null){ // 如果 head 为空, 意味着在向列表添加第一个元素
            head === node 
        } else {
            current = head
            // 循环链表, 直到找到最后一项
            // 链表的最后一个节点的 next 属性值始终是 null
            while (current.next) {
                current = current.next
            }
            // 找到最后一项, 将其 node 赋值为 node, 建立链接
            current.next = node
        }
    }
    length ++ // 更新链表的长度
}