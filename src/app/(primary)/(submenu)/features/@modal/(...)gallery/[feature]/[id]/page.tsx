import { Modal } from "~/components/modal";

export default async function ModalPage({
  params,
}: PageProps<"/gallery/[feature]/[id]">) {
  const { id, feature } = await params;
  return (
    <Modal>
      <>
        Henlo Gallery {feature} {id}
      </>
    </Modal>
  );
}
