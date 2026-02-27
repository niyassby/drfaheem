import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import { toast } from "sonner";
const url = import.meta.env.VITE_APP_URL

export function JoinTeam() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.contactNo || !formData.message) {
      toast.error('Please fill in all fields before submitting.');
      return;
    }

    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('subject', formData.contactNo);
    submitData.append('message', formData.message);

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        url,
        submitData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 200) {
        toast.success('Your application has been submitted successfully!');
        setFormData({ name: "", email: "", contactNo: "", message: "" });
        setOpen(false);
      } else {
        toast.error('Failed to submit application. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        toast.error(`Server error: ${error.response.status}`);
      } else if (error.request) {
        toast.error('Network error. Please check your connection and try again.');
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <h1 className="text-white bg-gradient-to-b py-3 px-4 from-secondary-500 to-primary-500 font-medium flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          Join Our Team
          <span className="bg-white text-primary-500 rounded-full p-1.5 group-hover:translate-x-1 transition-all duration-500">
            <HiArrowSmallRight />
          </span>
        </h1>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join our team</DialogTitle>
          <DialogDescription className="text-base">
            Submit your details and we will get back to you soon.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="contactNo" className="text-sm font-medium">
                Contact No *
              </Label>
              <Input
                id="contactNo"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                placeholder="Enter your contact number"
                className="w-full"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Tell us about yourself *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Why do you want to join our team? Share your skills and experience..."
                rows={4}
                className="w-full"
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <DialogFooter className="gap-2 spax2">
            <DialogClose asChild>
              <Button 
                type="button" 
                variant="outline" 
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}