package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Todo struct {
	Note_Id primitive.ObjectID `json:"note_id,omitempty"`
	Title string `json:"title,omitempty"`
	Detail string `json:"detail,omitempty"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}