import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { ArrowRight } from "lucide-react"
//<ArrowRight size={16}/>
export function AboutTeam({data}) {
  return (
    <Sheet>
  <SheetTrigger className='mt-1'>
    <div className="flex items-center gap-2 cursor-pointer hover:text-secondary-600 transition-all duration-150 text-sm font-medium ">
    Know More
    </div>
  </SheetTrigger>
  <SheetContent className='sm:w-[600px]'>
    <SheetHeader className='mt-6 flex items-center gap-0'>
        <img src={data?.image} className="w-32 h-40 rounded-lg object-cover" alt="" />
      <SheetTitle className='mt-3 text-xl'>{data?.name}</SheetTitle>
      {/* <SheetDescription>
      {data?.designation}
      </SheetDescription> */}
    </SheetHeader>
    <div className='w-full h-full overflow-auto'>
      {data?.description}
    </div>
  </SheetContent>
</Sheet>
  )
}
