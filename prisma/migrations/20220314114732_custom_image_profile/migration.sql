-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "customImage" TEXT,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL;
