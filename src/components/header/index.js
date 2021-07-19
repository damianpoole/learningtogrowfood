import * as React from 'react'
import Sun from '../sun'

const header = () => (
    <div className="bg-green-600 border-b-4 border-yellow-900">
        <div className="border-b-8 border-yellow-800">
            <header className="px-32 pt-12 pb-6">
                <a href="/">
                    <h1 className="text-white text-2xl font-bold font-mono">
                        Learning to grow food
                    </h1>
                </a>
                <Sun></Sun>
            </header>
        </div>
    </div>
)

export default header
