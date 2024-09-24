const useTraverseTree = ()=>{

    function insertNode(tree , folderId , item , isFolder){
      if(tree.id === folderId && tree.isFolder){
        tree.items.unshift({
            id : new Date().getTime() ,
            name : item ,
            isFolder  ,
            items : []
        })
        return tree;
      }

      let latestNode = [];

      latestNode = tree.items.map((ob)=>{
        if(ob.isFolder){
            return insertNode(ob , folderId , item ,isFolder);
        }
      });
      return {...tree , items : latestNode}


      
    }

    function UpdateNode (tree , Id, name){
        if(tree.id === Id){
          tree.name = name;
          return tree;
        }
        let latestNode = [];

        latestNode = tree.items.map((ob)=>{
          if(ob.isFolder){
              return insertNode(ob , folderId , item ,isFolder);
          }
        });
        return {...tree , items : latestNode}

    
    }


    return {insertNode  , UpdateNode};
}

export default useTraverseTree;