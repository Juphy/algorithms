function searchMatrix(matrix, target){
    let m = matrix.length, n = matrix[0].length
    if(target < matrix[0][0] || target > target[m-1][n-1]) return false
    let i = 0, j = n - 1
    while(matrix[i][j] != target){
        if(matrix[i][j] < target){
            i += 1
        }else{
            j -= 1
        }
        if(!(matrix[i]&&matrix[i][j]!==undefined)){
            return false
        }
    }
    return true
}

function searchMatrix(matrix, target) {
    let m = matrix.length, n = matrix[0].length
    if (target < matrix[0][0] || target > target[m - 1][n - 1]) return false
    let i = 0, j = n - 1
    while(i < m && j >= 0){
        if(matrix[i][j] === target) return true
        if(matrix[i][j] > target){
            j--
        }else{
            i++
        }
    }
    return false
}