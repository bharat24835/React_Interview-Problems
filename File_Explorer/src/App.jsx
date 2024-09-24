import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import explorer from './data/folderData'
import Folder from './components/Folder'
import useTraverseTree from './hooks/use-traverse'
function App() {
  const [explorerData , setExplorerData] = useState(explorer);

console.log(explorerData);
const {insertNode} = useTraverseTree();

const handleInsertNode = (folderId , item , isFolder) => {
  const finalTree = insertNode(explorerData , folderId , item , isFolder);
}


  return (
    <div >
    <Folder handleInsertNode = {handleInsertNode} explorer = {explorer}  />

    
    </div>
  )
}

export default App
