function LinkedList(){
    var Node = function(element){
        this.element = element
        this.next = null
    }

    var length = 0
    var head = null

    // 向链表尾部追加元素
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

    // 从链表中移除元素
    this.removeAt = function(position){
        // 检查这个位置是否有效(从0到列表的长度都是有效的数字)
        if (position >= 0 && position < length){
            var current = head
            var previous
            var index = 0

            if( position === 0 ){
                // 移除第一项 让 head 指向链表的第二个元素
                head = current.next // 其实也就是 head = head.next
            } else {
                // 迭代列表, 直到到达目标位置
                while (index++ < position) {
                    previous = current
                    current = current.next
                } // 迭代结束后, previous 为当前元素的前一个元素, current 为当前元素

                // 移除当前元素: 将 previous 与 current 的下一项连接起来(跳过 current, 从而移除它)
                previous.next = current.next
            }
        } else {
             return null // 表示没有从列表中移除元素
        }
    }

    // 在任意位置插入一个元素
    this.insert = function(position, element){

        // 检查这个位置是否有效(从0到列表的长度都是有效的数字)
        if(position >= 0 && position <= length){
            var node = new Node(element)
            var current = head
            var previous
            var index = 0

            if(position === 0){
                current.next = head.next
                head.next = node
            }else{
                while (index ++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            length ++
            return true
        }else{
            return false
        }
    }
}












