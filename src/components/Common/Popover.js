import {
  Box,
  Button,
  Heading,
  Popover as ChakPopover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
} from "@chakra-ui/react"
import React from "react"

const Popover = ({ props, children, label, trigger }) => {
  return (
    <ChakPopover autoFocus={false} isLazy placement="top">
      <PopoverTrigger>
        <Box>
          {!!trigger && <Box>{trigger}</Box>}
          {!trigger && (
            <Box>
              <Tooltip
                label={label}
                aria-label={label}
                hasArrow
                variant="default"
              >
                <Box
                  as="button"
                  p="15px"
                  _focus={{ outline: 0 }}
                  _hover={{ boxShadow: "xl" }}
                  rounded="2xl"
                  {...props}
                ></Box>
              </Tooltip>
            </Box>
          )}
        </Box>
      </PopoverTrigger>
      <PopoverContent
        bg="gray.50"
        shadow="2xl"
        _dark={{ bg: "gray.700" }}
        _focus={{ boxShadow: "none", outline: "none" }}
      >
        <PopoverArrow />
        <PopoverCloseButton mt="6px" />
        <PopoverHeader py="3">
          <Heading fontSize="md" letterSpacing="-0.9px" textAlign="center">
            {label}
          </Heading>
        </PopoverHeader>
        <PopoverBody p="0">{children}</PopoverBody>
      </PopoverContent>
    </ChakPopover>
  )
}

export default Popover
