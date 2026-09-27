'use client';
import { Button, Checkbox, Form, Input, Select, message } from 'antd';
import Link from 'next/link';
import { LockKeyhole, Mail, UserRound } from 'lucide-react';

const submit = (_:unknown) => message.success('Demo form submitted. Connect your production backend to enable real submissions.');

export function LoginForm(){return <Form layout="vertical" onFinish={submit} requiredMark={false} className="mt-8">
  <Form.Item name="email" label={<span className="font-bold">Email</span>} rules={[{required:true,message:'Enter your email'},{type:'email'}]}><Input prefix={<Mail size={15} className="text-[#9b93a7]"/>} placeholder="you@example.com"/></Form.Item>
  <Form.Item name="password" label={<span className="font-bold">Password</span>} rules={[{required:true,message:'Enter your password'}]}><Input.Password prefix={<LockKeyhole size={15} className="text-[#9b93a7]"/>} placeholder="••••••••"/></Form.Item>
  <div className="mb-5 flex items-center justify-between text-sm"><Checkbox>Remember me</Checkbox><a href="#" className="font-bold text-[#6d28d9]">Forgot password?</a></div>
  <Button htmlType="submit" type="primary" block size="large">Sign In</Button>
  <div className="my-5 flex items-center gap-3 text-xs text-[#9a92a5]"><span className="h-px flex-1 bg-[#e8e3ef]"/>or<span className="h-px flex-1 bg-[#e8e3ef]"/></div>
  <Button block size="large">Continue with Google</Button>
  <p className="mt-6 text-center text-sm text-[#71697e]">Don&apos;t have an account? <Link href="/signup" className="font-extrabold text-[#6d28d9]">Create Account</Link></p>
</Form>}

export function SignupForm(){return <Form layout="vertical" onFinish={submit} requiredMark={false} className="mt-8">
  <Form.Item name="name" label={<span className="font-bold">Full Name</span>} rules={[{required:true,message:'Enter your name'}]}><Input prefix={<UserRound size={15} className="text-[#9b93a7]"/>} placeholder="Alex Morgan"/></Form.Item>
  <Form.Item name="email" label={<span className="font-bold">Email</span>} rules={[{required:true,message:'Enter your email'},{type:'email'}]}><Input prefix={<Mail size={15} className="text-[#9b93a7]"/>} placeholder="you@example.com"/></Form.Item>
  <div className="grid gap-3 sm:grid-cols-2"><Form.Item name="password" label={<span className="font-bold">Password</span>} rules={[{required:true},{min:8,message:'Use at least 8 characters'}]}><Input.Password/></Form.Item><Form.Item name="confirm" dependencies={['password']} label={<span className="font-bold">Confirm Password</span>} rules={[{required:true},({getFieldValue})=>({validator(_,v){return !v||v===getFieldValue('password')?Promise.resolve():Promise.reject(new Error('Passwords do not match'));}})]}><Input.Password/></Form.Item></div>
  <Form.Item name="terms" valuePropName="checked" rules={[{validator:(_,v)=>v?Promise.resolve():Promise.reject(new Error('Please accept the terms'))}]}><Checkbox>I agree to the Terms & Privacy Policy</Checkbox></Form.Item>
  <Button htmlType="submit" type="primary" block size="large">Create Account</Button>
  <div className="my-5 flex items-center gap-3 text-xs text-[#9a92a5]"><span className="h-px flex-1 bg-[#e8e3ef]"/>or<span className="h-px flex-1 bg-[#e8e3ef]"/></div><Button block size="large">Continue with Google</Button>
  <p className="mt-6 text-center text-sm text-[#71697e]">Already have an account? <Link href="/login" className="font-extrabold text-[#6d28d9]">Sign In</Link></p>
</Form>}

export function ContactForm(){return <Form layout="vertical" onFinish={submit} requiredMark={false}>
  <div className="grid gap-x-4 sm:grid-cols-2"><Form.Item name="name" label={<span className="font-bold">Name</span>} rules={[{required:true}]}><Input/></Form.Item><Form.Item name="email" label={<span className="font-bold">Email</span>} rules={[{required:true},{type:'email'}]}><Input/></Form.Item></div>
  <div className="grid gap-x-4 sm:grid-cols-2"><Form.Item name="company" label={<span className="font-bold">Company</span>}><Input/></Form.Item><Form.Item name="store" label={<span className="font-bold">Store URL (optional)</span>}><Input placeholder="https://"/></Form.Item></div>
  <Form.Item name="orders" label={<span className="font-bold">Monthly orders (optional)</span>}><Select options={['0–100','101–500','501–2,000','2,000+'].map(x=>({value:x,label:x}))} placeholder="Select range"/></Form.Item>
  <Form.Item name="message" label={<span className="font-bold">Message</span>} rules={[{required:true}]}><Input.TextArea rows={5} placeholder="Tell us what you want to automate or monitor."/></Form.Item>
  <Button htmlType="submit" type="primary" size="large">Send Message</Button>
</Form>}
