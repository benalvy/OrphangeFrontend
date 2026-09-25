import React, { useEffect, useState, useRef } from 'react'
import Sidebar from '../Components/Sidebar'
import socket from '../../Services/Socket'
import { getApprovedOrphanagesAPI, getMessagesAPI } from '../../Services/allAPI'

function Chat() {

  const [orphanages, setOrphanages] = useState([])
  const [selectedOrphanage, setSelectedOrphanage] = useState(null)
  const [messages, setMessages] = useState([])
  const [text, setText] = useState("")
  const bottomRef = useRef(null)

  const myUser = JSON.parse(sessionStorage.getItem("user"))
  const myEmail = myUser?.email

  const getallorphanages = async () => {
    try {
      const result = await getApprovedOrphanagesAPI()
      setOrphanages(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getallorphanages()
  }, [])

  useEffect(() => {
    if (myEmail) {
      socket.emit("register", myEmail)
    }
  }, [myEmail])

  useEffect(() => {
    if (!selectedOrphanage) return

    const loadHistory = async () => {
      try {
        const result = await getMessagesAPI(selectedOrphanage.email)
        setMessages(result.data)
      } catch (error) {
        console.log(error)
      }
    }

    loadHistory()
  }, [selectedOrphanage])

  // Listen for incoming messages
  useEffect(() => {
    const handleReceive = (msg) => {
      if (
        selectedOrphanage &&
        (msg.senderEmail === selectedOrphanage.email || msg.receiverEmail === selectedOrphanage.email)
      ) {
        setMessages(prev => [...prev, msg])
      }
    }

    socket.on("receiveMessage", handleReceive)

    return () => {
      socket.off("receiveMessage", handleReceive)
    }
  }, [selectedOrphanage])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = () => {
    if (!text.trim() || !selectedOrphanage) return

    socket.emit("sendMessage", {
      senderEmail: myEmail,
      receiverEmail: selectedOrphanage.email,
      text
    })

    setText("")
  }

  return (
    <div className='grid grid-cols-12 min-h-screen'>

      <div className='col-span-2'>
        <Sidebar />
      </div>

      <div className='col-span-10 p-6'>

        <h1 className='text-2xl font-bold mb-4 pb-6'>Chat With Orphanage</h1>

        <div className='grid grid-cols-12 gap-4 h-[600px]'>

          {/* Orphanage list */}
          <div className='col-span-4 px-2 py-2 bg-violet-50 border border-gray-200 rounded-2xl overflow-y-auto'>
            {orphanages.map(item => (
              <div className=' p-1 rounded-md'>
                <div
                key={item._id}
                onClick={() => setSelectedOrphanage(item)}
                className={`p-4 border-gray-200 border rounded-lg cursor-pointer hover:bg-violet-100 ${
                  selectedOrphanage?._id === item._id ? 'bg-violet-500' : ''
                }`}
              >
                <p className='font-bold text-gray-800'>{item.Orphanagename}</p>
                <p className='text-md text-black'>{item.Address}</p>
              </div>
              </div>
            ))}
          </div>

          {/* Chat window */}
          <div className='col-span-8 bg-white border border-gray-200 rounded-2xl flex flex-col'>

            {!selectedOrphanage ? (
              <div className='flex-1 flex items-center justify-center text-gray-400'>
                Select an orphanage to start chatting
              </div>
            ) : (
              <>
                <div className='bg-violet-600 text-white p-3 rounded-t-2xl font-semibold'>
                  {selectedOrphanage.Orphanagename}
                </div>

                <div className='flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50'>
                  {messages.map((msg, i) => (
                    <div className='pb-2'>
                        <div
                      key={msg._id || i}
                      className={`max-w-[70%] p-2 rounded-xl text-lg font-semibold ${
                        msg.senderEmail === myEmail
                          ? 'bg-violet-600 text-white ml-auto'
                          : 'bg-white border border-gray-200 flex justify-end'
                      }`}
                    >
                      {msg.text}
                    </div>
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>

                <div className='flex p-2 border-gray-600 gap-2'>
                  <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder='Type a message...'
                    className='flex-1 border-gray-100 rounded-xl px-3 py-2'
                  />
                  <button
                    onClick={sendMessage}
                    className='bg-violet-600 text-white px-4 rounded-xl'
                  >
                    Send
                  </button>
                </div>
              </>
            )}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Chat