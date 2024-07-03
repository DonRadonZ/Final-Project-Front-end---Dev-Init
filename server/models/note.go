package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Note struct {
	Note_Id primitive.ObjectID `json:"note_id,omitempty"`
	Title string `json:"title,omitempty"`
	Description string `json:"description,omitempty"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}