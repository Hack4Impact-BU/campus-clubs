import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    providers: [
        Providers.Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Username"},
                password: { label: "Password", type: "password"}
            },
            authorize: async (credentials) => {
                const user = { id: 0, name: "Manuja DeSilva", email: "mdesilva@bu.edu"}
                if (user) {
                    return Promise.resolve(user)
                } else {
                    return Promise.reject()
                }
            }
        })
    ], 
    pages: {
        signIn: "/auth/login"
    },
    callbacks: {
        redirect: async (url, baseUrl) => {
            return Promise.resolve(baseUrl);
        }
    }
}

export default (req, res) => NextAuth(req, res, options)

