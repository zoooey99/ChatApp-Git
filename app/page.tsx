import ChatHeader from '@/components/ChatHeader'
import React from 'react'
import { supabaseServer } from "@/lib/supabase/server"


export default async function page() {

  const supabase = supabaseServer()
  // const { data } = await supabase.auth.getUser()
  // console.log(data);
 
  return (
    <div className="max-w-3x1 mx-auto md:py-10 h-screen">
      <div className="h-full border rounded-md"> 
      <ChatHeader></ChatHeader>
      </div>

    </div>
    
  )
}
