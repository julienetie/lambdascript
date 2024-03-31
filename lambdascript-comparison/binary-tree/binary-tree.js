// Creates a tree node.
const TreeNode = value => ({
    value,
    left: null,
    right: null
})

// Inserts a new node into the binary tree.
const insertNode = (node, newNode) => {
    // Decides the direction of the tree to move to.
    if (newNode.value < node.value) {
        node.left ? insertNode(node.left, newNode) : (node.left = newNode)
        return
    }
    node.right ? insertNode(node.right, newNode) : (node.right = newNode)
}

// Creates a binary tree.
const binaryTree = () => {
    let root = null

    return {
        // Performs an in-order traversal of the binary tree.
        inOrderTraversal: (callback, node = root) => {
            if (!node) return

            inOrderTraversal(callback, node.left)
            callback(node.value)
            inOrderTraversal(callback, node.right)
        },

        // Inserts a value into the binary tree.
        insert: value => {
            const newNode = TreeNode(value)

            if (!root) return void (root = newNode)
            insertNode(root, newNode)
        }
    }
}

const { insert, inOrderTraversal } = binaryTree()

insert(5)
insert(3)
insert(7)
insert(2)
insert(4)
insert(6)
insert(8)

console.log('In-order traversal:')
inOrderTraversal(value => console.log(value))
