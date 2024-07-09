export class ValidationUtils {
    static isEmailValid(email: string): boolean {
      const emailPattern = /^[A-Z0-9a-z.\-_+]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,50}$/;
      return emailPattern.test(email);
    }
  
    static isValidPhone(phone: string): boolean {
      const phonePattern = /^\d{10,15}$/; // Example pattern for phone number
      return phonePattern.test(phone);
    }
  
    static isPasswordValid(password: string): boolean {
      const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/;
      return passwordPattern.test(password);
    }
  
    static isConfirmPassBoolean(confirmPassword: string, password: string): boolean {
      return confirmPassword === password;
    }
  }

