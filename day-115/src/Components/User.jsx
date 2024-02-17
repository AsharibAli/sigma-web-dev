import React from 'react'
import { useSearchParams } from 'react-router-dom'

const User = () => {
    const params = useSearchParams()
    return (
        <div>
            I am a user {params.username}
        </div>
    )
}

export default User