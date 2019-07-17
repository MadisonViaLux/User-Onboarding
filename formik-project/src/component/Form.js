import React from 'react'




const Form = () => {

    return(
        <div>
            <form>

                <input 
                type='text'
                name='name'
                placeholder='name'
                />

                <input 
                type='text'
                name='email'
                placeholder='email'
                />

                <input 
                type='text'
                name='password'
                placeholder='password'
                />

                <input 
                type='checkbox'
                name='checkbox'
                />

                <button>Submit!</button>

            </form>

        </div>
    )
}

export default Form