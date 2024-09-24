import React from "react";
import { useState } from "react";


const Folder = ({ explorer , handleInsertNode }) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null,
    });

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);

        setShowInput({
            visible: true,
            isFolder,
        });
    };
    const handleUpdateFolder = (e)=>{
        e.stopPropagation();
        
    }


    const onAddFolder = (e)=>{
        if(e.keyCode  === 13 && e.target.value){

            // add logic
            handleInsertNode(explorer.id  , e.target.value , showInput.isFolder)
            
            

            setShowInput({...showInput , visible : false});
        }
    }

    if (explorer.isFolder) {
        return (
            <div>
                <div
                    className="folder"
                    onClick={() => {
                        setExpand(!expand);
                    }}
                >
                    <span>
                        {expand ? "📂" : "📁"} {explorer.name}{" "}
                    </span>
                    <div>
                    <button
                          
                            style={{ marginRight: 4 }}
                        >
                            Update +{" "}
                        </button>
                        <button
                            onClick={(e) => {
                                handleNewFolder(e, true);
                            }}
                            style={{ marginRight: 4 }}
                        >
                            Folder +{" "}
                        </button>
                        <button
                            onClick={(e) => {
                                handleNewFolder(e, false);
                            }}
                        >
                            File +{" "}
                        </button>
                    </div>
                </div>

                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                    {showInput.visible && (
                        <div className="inputContainer">
                            <span>{showInput.isFolder ? "📁" : "📄"}</span>
                            <input className="inputContainer__input" autoFocus type="text" onBlur={(e) => { setShowInput({ ...showInput, visible: false })  }} onKeyDown={(e)=>{onAddFolder(e)}} />
                        </div>
                    )}
                    {explorer.items.map((exp) => {
                        return <Folder handleInsertNode={handleInsertNode} explorer={exp} key={exp.id} />;
                    })}
                </div>
            </div>
        );
    } else {
        return <span className="file">📄 {explorer.name} </span>;
    }
};
export default Folder;
