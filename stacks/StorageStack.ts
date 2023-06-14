import { StackContext, Table, Bucket } from "sst/constructs";

export function StorageStack({ stack, app }: StackContext) {
    // Create an S3 bucket
    const bucket = new Bucket(stack, "Uploads");
    
  // Create the DynamoDB table
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  return {
      table,
      bucket
  };
}