import React from 'react'

function AddPost({noteText, setnoteText, noteTitle, setnoteTitle, id, handleEdit}) {
  return (
    <div class="bg-[#aaec81] rounded-10 p-4 min-h-170 flex flex-col whitespace-pre-wrap rounded-2xl">
     <textarea  value={noteTitle}
        onChange={(e) => setnoteTitle(e.target.value)} placeholder="Post Title" className="textarea text-black textarea-bordered bg-white textarea-xs w-full max-w-xs mb-2" ></textarea>
    <textarea value={noteText}  onChange={(e) => setnoteText(e.target.value)} placeholder="Post Body" className="textarea text-black  bg-white textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
    <button
      onClick={handleEdit}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-2 px-3 rounded-2xl"
    >
      {id != null ? "Edit" : "Add"}
    </button>
</div>
  )
}

export default AddPost