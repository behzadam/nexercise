"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function DialogProduct({id}: { id: string}) {
  const router = useRouter();

  function onOpenChange(isOpen: boolean) {
    if (!isOpen) {
      router.back();
    }
  }

  return (
    <Dialog open onOpenChange={(isOpen) => onOpenChange(isOpen)}>
      <DialogContent className="w-full max-w-[350px]">
        <DialogHeader>
          <DialogTitle>Product {id} preview</DialogTitle>
        </DialogHeader>
        <div className="max-w-[350px] aspect-square flex items-center justify-center bg-slate-900">
          {id}
        </div>
      </DialogContent>
    </Dialog>
  );
}
