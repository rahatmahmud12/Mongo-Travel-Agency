import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);
        axios.post('https://calm-beach-10483.herokuapp.com/services', data)
            .then(res => {
                console.log(res)
                if (res.status) {
                    alert('Added okay!')
                    reset();
                }
            })
    };
    return (
        <div>
            <h1 className="mx-auto mt-24">Please Add A Service</h1>
            <div className="mt-24 flex-col add-service">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Service" className="border-2" {...register("name")} />
                    <textarea placeholder="Description" className="border-2" {...register("Description",)} />
                    <input placeholder="Budget" className="border-2" type="number" {...register("budget")} />
                    <input placeholder="Image URL" className="border-2" {...register("img",)} />
                    <input className="border-2" type="submit" />
                </form>



            </div>
        </div>
    );
};

export default AddService;