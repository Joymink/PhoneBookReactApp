const token = '01c9b3f3e78ee0067f869153311a5e934c778b7ed39834ed'

export const server_calls ={
    get: async () =>{
        const response = await fetch('https://phonebook-4ynz.onrender.com/api/contacts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    create: async(data: any = {}) => {
        const response = await fetch(`https://phonebook-4ynz.onrender.com/api/contacts`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://phonebook-4ynz.onrender.com/api/contacts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to Update data on server')
        }

        return await response.json()
    },
    delete: async(id:string) => {
        const response = await fetch(`https://phonebook-4ynz.onrender.com/api/contacts/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        })
        if(!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    }
}