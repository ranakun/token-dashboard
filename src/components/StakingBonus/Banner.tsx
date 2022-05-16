import { Button, CloseButton, Stack, useDisclosure } from "@chakra-ui/react"
import Card from "../Card"
import { H4 } from "../Typography"
import { BonusTitle } from "./Title"
import { useModal } from "../../hooks/useModal"
import { ModalType } from "../../enums"

export const StakingBonusBanner = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })
  const { openModal } = useModal()

  return (
    <Card w="100%" display={isOpen ? "block" : "none"} position="relative">
      <CloseButton
        position="absolute"
        right="14px"
        top="12px"
        onClick={onClose}
      />
      <Stack
        alignItems="center"
        spacing={6}
        direction={{ base: "column", xl: "row" }}
      >
        <BonusTitle />
        <H4 textAlign={{ base: "center", xl: "unset" }}>
          Starting June 1st you can get your Staking Bonus!
        </H4>
        <Button
          onClick={() => openModal(ModalType.StakingBonus)}
          w={{ base: "100%", xl: "auto" }}
          marginY="auto"
          mt={{ base: 12, xl: "auto" }}
          px={{ base: 4, md: 12 }}
        >
          Check eligibility
        </Button>
      </Stack>
    </Card>
  )
}
