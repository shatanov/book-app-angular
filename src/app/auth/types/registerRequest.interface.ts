export interface RegisterRequestInterface {
  user: {
    fullName: string
    email: string
    password: string
    passwordConfirm: string
  }
}
