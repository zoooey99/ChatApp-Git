import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest } from 'next/server'

import { supabaseServer } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/' //EDITED BECAUSE NEXT DOESN'T BRING UP ANYTHING (ithink)
  //const next = '/'

  if (token_hash && type) {
    const supabase = supabaseServer()

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      // redirect user to specified redirect URL or root of app
      redirect(next)
    }
  }

  // redirect the user to an error page with some instructions
  redirect('/error') //DELETED SO THAT IT DOES NOT ALWAYS THROW ERROR
  //redirect(next)
}