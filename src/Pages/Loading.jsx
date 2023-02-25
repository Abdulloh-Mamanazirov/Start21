import React from 'react'

const Loading = () => {
  return (
    <div className="absolute inset-0 bg-black grid place-items-center">
      <img className='w-2/12' src="/loading.gif" alt="loading" />
    </div>
  );
}

export default Loading
