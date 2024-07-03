package main

import (
	"github.com/DonRadonZ/Final-Project-Front-end---Dev-Init/v2/config"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {

	app := fiber.New()

	app.Use(cors.New())

	configs.ConnectDB()

	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.SendString("OK")
	})

	app.Listen("127.0.0.1:3000")
	
}