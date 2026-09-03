import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
	name: z.string().min(2, {
		message: "Name should at least have 2 characters",
	}),
	email: z
		.string()
		.email({
			message: "Email provided is invalid",
		})
		.min(5),
	message: z.string().min(2, {
		message: "Message should at least have 2 characters",
	}),
});

const labelClass = "font-mono text-[11px] tracking-[0.18em] uppercase";

function ContactForm({ className }: { className?: string }) {
	const [loading, setLoading] = useState(false);
	const contactForm = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
		const templateParams = values;
		setLoading(true);
		emailjs
			.send(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				templateParams,
				{
					publicKey: import.meta.env.VITE_PUBLIC_KEY,
				},
			)
			.then(
				() => {
					setLoading(false);
					toast("Message sent — I'll reply within a couple of days");
					contactForm.reset();
				},
				(error) => {
					setLoading(false);
					toast("Message didn't send. Email me directly instead.");
					console.error(error);
				},
			);
	};

	return (
		<div className={className}>
			<Form {...contactForm}>
				<form
					onSubmit={contactForm.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<div className="grid gap-6 sm:grid-cols-2">
						<FormField
							control={contactForm.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel className={labelClass}>Name</FormLabel>
									<FormControl>
										<Input
											placeholder="Jane Rivera"
											autoComplete="name"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={contactForm.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel className={labelClass}>Email</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="jane@company.com"
											autoComplete="email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={contactForm.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className={labelClass}>Message</FormLabel>
								<FormControl>
									<Textarea
										rows={6}
										placeholder="What are you building, and what does it need to do?"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						disabled={loading}
						className={cn(
							"cursor-pointer bg-teal-600 text-white shadow-lg shadow-teal-600/20",
							"hover:bg-teal-700 focus:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60",
						)}
						type="submit"
					>
						{loading ? (
							<LoaderCircle className="animate-spin" aria-hidden="true" />
						) : null}
						<span>{loading ? "Sending…" : "Send message"}</span>
					</Button>
				</form>
			</Form>
		</div>
	);
}

export default ContactForm;
