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
				(response) => {
					console.log("Success!", response.status);
					setLoading(false);
					toast("Successfully sent an email");
					contactForm.reset();
				},
				(error) => {
					setLoading(false);
					toast("Oh no! An error has occurred", error);
					console.log(error);
				},
			);
	};
	return (
		<div className={className}>
			<Form {...contactForm}>
				<form
					onSubmit={contactForm.handleSubmit(onSubmit)}
					className="space-y-2"
				>
					<FormField
						control={contactForm.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="hidden">Name</FormLabel>
								<FormControl>
									<Input placeholder="Your name" {...field} />
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
								<FormLabel className="hidden">Email</FormLabel>
								<FormControl>
									<Input placeholder="Email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={contactForm.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="hidden">Message</FormLabel>
								<FormControl>
									<Textarea placeholder="Message" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						disabled={loading}
						className="mt-4 cursor-pointer space-x-2"
						type="submit"
					>
						{loading && <LoaderCircle className="animate-spin" />}{" "}
						<span>Submit</span>
					</Button>
				</form>
			</Form>
		</div>
	);
}

export default ContactForm;
