CREATE TABLE "customers" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" text NOT NULL,
	"image_url" text
);
