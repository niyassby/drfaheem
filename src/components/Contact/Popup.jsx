import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import React from 'react'
import { ContactInput } from "../home/ContactInput"
import { Button } from "../ui/button"

function Popup() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className='bg-primary-700 text-white hover:bg-primary-800 cursor-pointer'>Appointment</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <ContactInput />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Popup