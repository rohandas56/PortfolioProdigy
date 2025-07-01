import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // Validate email format
      const emailSchema = z.string().email();
      emailSchema.parse(contactData.email);
      
      // Store the contact message
      const contact = await storage.createContact(contactData);
      
      // In a real application, you would send an email here
      // For now, we'll just log it and return success
      console.log(`New contact message from ${contact.name} (${contact.email}): ${contact.message}`);
      
      res.status(200).json({ 
        message: "Contact message received successfully",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid input data",
          errors: error.errors 
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
