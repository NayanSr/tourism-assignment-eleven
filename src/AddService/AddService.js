import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        //console.log(data);
        axios.post('https://mighty-temple-95823.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data added');
                    reset({});
                }
            })
    };
    return (
        <div className='add-service'>
            <h2>Add A New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <textarea {...register("details")} placeholder='Details' />
                <input type="number" {...register("price")} placeholder='Cost' />
                <input {...register("img")} placeholder='Image-URL' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;