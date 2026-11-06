'use client';

import { cn } from '@/lib/utils';
import axios from 'axios';
import Link from 'next/link';
import { FormState, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { InputField, InputLabel, InputRoot } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

type FormValue = {
  email: string;
  password: string;
};

const signupSchema = z.object({
  email: z.email().trim().min(1, 'Email is required'),
  password: z
    .string()
    .trim()
    .min(1, 'Password is required')
    .min(8, 'Password must be 8 Chars'),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValue> = async (data: SignupFormData) => {
    try {
      const response = await axios.post(
        `http://localhost:3002/api/v1/auth/signup`,
        data
      );
      console.log('Response :', response.data);
      console.log('Status :', response.status);
      reset();
      if (response.status) {
        router.push('/dashboard');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const errorClasses = 'text-sm font-medium text-red-400';
  return (
    <motion.div
      initial={{
        y: 30,
        opacity: 0.1,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        mass: 1,
      }}
      className="mx-auto flex h-dvh w-full max-w-sm flex-col items-center justify-center gap-6 pb-10 text-neutral-900"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-medium tracking-tight text-neutral-900">
          Get started
        </h1>
        <p className="text-base text-neutral-900">
          Create an account to get started.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-start justify-center gap-6"
      >
        <div className="flex w-full flex-col items-start justify-center gap-4.5">
          <InputRoot className="relative flex w-full flex-col items-start justify-center gap-1.5">
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField
              className="w-full rounded-lg bg-neutral-200 px-3.5 py-2 text-base font-medium text-neutral-800 outline-0 outline-neutral-500 focus-within:outline-2"
              type="email"
              id="email"
              placeholder="yash@paytm.com"
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email', { required: 'Email is requied' })}
            />
            {errors.email && (
              <p role="alert" className={errorClasses}>
                {errors.email.message}
              </p>
            )}
          </InputRoot>

          <InputRoot className="relative flex w-full flex-col items-start justify-center gap-1.5">
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField
              className="w-full rounded-lg bg-neutral-200 px-3.5 py-2 text-base font-medium text-neutral-800 outline-0 outline-neutral-500 focus-within:outline-2"
              type="password"
              id="password"
              placeholder="Enter your password"
              aria-invalid={errors.password ? 'true' : 'false'}
              {...register('password', { required: 'Password is requied' })}
            />
            {errors.password && (
              <p role="alert" className={errorClasses}>
                {errors.password.message}
              </p>
            )}
          </InputRoot>
        </div>

        <div className="w-full space-y-5">
          <Button
            type={'submit'}
            disabled={isSubmitting}
            loading={isSubmitting}
            className={cn(
              'w-full rounded-xl border-none bg-neutral-900 py-2.5 text-center font-medium text-neutral-50 outline-1 outline-neutral-900',
              'text-neutral-50 inset-shadow-[0_1px_2px_0_rgba(200,200,200,0.6),0_-1px_2px_0_rgba(200,200,200,0.4)]',
              'mt-1.5',
              isSubmitting
                ? 'cursor-not-allowed opacity-80'
                : 'cursor-pointer duration-100 ease-out will-change-transform hover:bg-neutral-950 active:scale-99'
            )}
          >
            <>Continue</>
          </Button>

          <p className="w-full text-center text-base">
            Already have an account ?
            <Link
              href={'/login'}
              className="hover:underline-1 w-fit font-medium text-blue-600 underline decoration-transparent decoration-solid underline-offset-4 transition-colors duration-100 ease-out hover:decoration-blue-600"
            >
              {' '}
              Log in
            </Link>
          </p>
        </div>
      </form>
    </motion.div>
  );
}
