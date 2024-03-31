use std::rc::Rc;
use std::cell::RefCell;

// Define the node of the binary tree
#[derive(Debug)]
struct TreeNode<T> {
    value: T,
    left: Option<Rc<RefCell<TreeNode<T>>>>,
    right: Option<Rc<RefCell<TreeNode<T>>>>,
}

impl<T> TreeNode<T> {
    fn new(value: T) -> Rc<RefCell<TreeNode<T>>> {
        Rc::new(RefCell::new(TreeNode {
            value,
            left: None,
            right: None,
        }))
    }
}

// Define the binary tree
#[derive(Debug)]
struct BinaryTree<T> {
    root: Option<Rc<RefCell<TreeNode<T>>>>,
}

impl<T: PartialOrd> BinaryTree<T> {
    fn new() -> Self {
        Self { root: None }
    }

    // Insert a value into the binary tree
    fn insert(&mut self, value: T) {
        let new_node = TreeNode::new(value);

        match &mut self.root {
            None => {
                self.root = Some(new_node);
            }
            Some(node) => {
                Self::insert_node(node.clone(), new_node.clone());
            }
        }
    }

    // Helper function to recursively insert a value into the binary tree
    fn insert_node(node: Rc<RefCell<TreeNode<T>>>, new_node: Rc<RefCell<TreeNode<T>>>) {
        let mut node = node.borrow_mut();

        if new_node.borrow().value < node.value {
            if node.left.is_none() {
                node.left = Some(new_node.clone());
            } else {
                Self::insert_node(node.left.as_ref().unwrap().clone(), new_node.clone());
            }
        } else {
            if node.right.is_none() {
                node.right = Some(new_node.clone());
            } else {
                Self::insert_node(node.right.as_ref().unwrap().clone(), new_node.clone());
            }
        }
    }

    // Traverse the binary tree in-order
    fn in_order_traversal<F>(&self, node: Option<Rc<RefCell<TreeNode<T>>>>, callback: &F)
    where
        F: Fn(&T),
    {
        if let Some(n) = node {
            let n = n.borrow();
            self.in_order_traversal(n.left.clone(), callback);
            callback(&n.value);
            self.in_order_traversal(n.right.clone(), callback);
        }
    }
}

// Example usage
fn main() {
    let mut tree = BinaryTree::new();
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);
    tree.insert(2);
    tree.insert(4);
    tree.insert(6);
    tree.insert(8);

    println!("In-order traversal:");
    tree.in_order_traversal(tree.root.clone(), &|value| println!("{:?}", value));
}
