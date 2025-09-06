"use client";
export default function Error({error}:{error:Error}){return <div className='p-6 rounded-2xl border'>Error loading cocktail: {error.message}</div>;}
