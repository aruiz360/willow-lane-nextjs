"use client"

import { useState } from "react"
import Image from "next/image"
import Modal from "react-modal"

if (typeof window !== "undefined") {
  Modal.setAppElement("#app-root")
}

export default function DownloadWithForm({
  title = "PDF Report",
  imageSrc,
  videoUrl
}) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isPlayerOpen, setIsPlayerOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    location: "",
    jobTitle: "",
    company: "",
    email: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    setError("") // clear error while typing
  }

  const validateForm = () => {
    for (const [key, value] of Object.entries(form)) {
      if (!value.trim()) {
        return `${key} is required`
      }
    }
    // simple email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Please enter a valid email address"
    }
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch("/api/save-to-gsheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      })

      if (res.ok) {
        setIsFormOpen(false)
        setIsPlayerOpen(true)
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch (err) {
      console.error(err)
      setError("Error submitting form")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="text-center">
      <button
        onClick={() => setIsFormOpen(true)}
        className="text-body-mobile md:text-body text-gray-dark font-thin hover:font-bold hover:text-primary py-3 px-6 transition-all duration-200 font-source"
      >
        {title}
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            width={360}
            height={170}
            className="pt-5"
          />
        )}
      </button>

      <Modal
        isOpen={isFormOpen}
        onRequestClose={() => setIsFormOpen(false)}
        className="bg-white max-w-lg mx-auto p-6 rounded shadow-lg mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start"
      >
        <h2 className="text-xl font-bold mb-4">Fill out to download</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="border p-2" required />
          <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="border p-2" required />
          <input name="location" placeholder="Location" value={form.location} onChange={handleChange} className="border p-2" required />
          <input name="jobTitle" placeholder="Title" value={form.jobTitle} onChange={handleChange} className="border p-2" required />
          <input name="company" placeholder="Company" value={form.company} onChange={handleChange} className="border p-2" required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2" required />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" disabled={isSubmitting} className="mt-3 bg-primary text-white px-4 py-2 rounded">
            {isSubmitting ? "Saving..." : "Send & Download"}
          </button>
        </form>
      </Modal>

      <Modal
        isOpen={isPlayerOpen}
        onRequestClose={() => setIsPlayerOpen(false)}
        className="bg-black max-w-3xl mx-auto p-6 rounded shadow-lg mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
      >
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </Modal>
    </div>
  )
}
