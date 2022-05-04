var isSymmetric = function (root) {
    if(!root) return true
    function mirror(l, r){
        if(!l && !r) return true
        if(!l || !r || l.val !== r.val) return false
        return mirror(l.left, r.right) && mirror(l.right, r.left)
    }

    return mirror(root.left, root.right)
};