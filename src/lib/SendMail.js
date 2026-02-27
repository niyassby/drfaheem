import { toast } from "sonner";
import axios from 'axios';

export const handleSubmit = async (name, email, subject, message) => {
  if (!name || !email || !subject || !message) {
    toast.error('Please fill in all fields before submitting.');
    return;
  }

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('subject', subject);
  formData.append('message', message);

  try {
    const response = await axios.post(
      'https://arabianstationery.ae/sendEmail.php',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    if (response.status === 200) {
      toast.success('Message sent successfully!');
    } else {
      toast.error('Failed to send message. Please try again.');
    }
  } catch (error) {
    if (error.response) {
      // Server responded with error status
      toast.error(`Error: ${error.response.status} - ${error.response.data}`);
    } else if (error.request) {
      // Request made but no response received
      toast.error('Network error. Please check your connection and try again.');
    } else {
      // Something else happened
      toast.error('An unexpected error occurred. Please try again.');
    }
  }
};