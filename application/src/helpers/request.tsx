interface IRequest {
    get<T>(url: string): Promise<T>;
    delete(url: string): Promise<Response>;
    post<T>(url: string, payload: T): Promise<Response>;
    put<T>(url: string, payload: T): Promise<Response>;
}

class ApiRequest implements IRequest {
    async get<T>(url: string): Promise<T> {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`GET request failed with status ${response.status}`);
        }
        return response.json() as Promise<T>;
    }

    async delete(url: string): Promise<Response> {
        return fetch(url, {
            method: "DELETE",
            headers: {"Content-Type": "application/json" },
        });
    }

    async post<T>(url:string, payload: T): Promise<Response> {
        return fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });
    }
    
     async put<T>(url: string, payload: T): Promise<Response> {
        return fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });
    }
}

export default ApiRequest;