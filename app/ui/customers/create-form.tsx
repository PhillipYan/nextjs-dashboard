'use-client';
import { createCustomer } from '@/app/lib/actions';


export default function Form() {

    return (
        <form action={createCustomer}>

            <div>

                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter customer Name"
                    />
            </div>

            <div>

            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter customer Email"
                />
            </div>

            <div>
            <label htmlFor="image_url">Image URL</label>
            <input
                id="image_url"
                name="image_url"
                type="text"
                placeholder="/customers/customer-name.png"
            />
            </div>
            <button type="submit">
                Create Customer
            </button>

        </form>
    );

}
