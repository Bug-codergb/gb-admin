function buildTreeHandle(parent, list) {
  let meta = parent.meta || '';
   typeof meta ==="string" && (parent.meta =JSON.parse(meta));
  for (let i = 0; i < list.length; i++){
    const item =list[i]
    if (parent.id === item.parentId) {
      if (parent.children) {
        
        parent.children.push({
          ...item,
         
        });
        
      } else {
       
        parent.children = [
          { ...item }
        ];
      }
      list.splice(i, 1);
      i--
      parent.children.sort((a, b) => a.sort - b.sort);
    }    
  }
  if (parent.children && parent.children.length !== 0) {
    parent.children.forEach((item) => {
      buildTreeHandle(item, list);
    })
  } else {
    return;
  } 
}
function buildTree(result) {
  if (!result || result.length === 0) {
    return []
  }
  result.sort((a, b) => a.sort - b.sort)
  result.forEach((item) => {
    buildTreeHandle(item, result);
  }) 
}
module.exports = {
  buildTree
}