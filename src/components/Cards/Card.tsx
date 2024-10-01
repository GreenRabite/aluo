import { useState } from "react";

import {
  Box,
  Checkbox,
  Text,
  Tooltip,
} from "@chakra-ui/react";

type Props = {
  collected?: boolean;
  variant: string;
  hover?: string;
  subtitle?: string;
};

const Card = (props: Props) => {
  const { collected, variant, subtitle, hover } = props;

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  console.log({ isTooltipOpen });

  return (
    <Box width="500px">
      <Tooltip
        label={hover}
        closeDelay={0}
        isOpen={isTooltipOpen}
        aria-label="A tooltip"
        placement="bottom"
      >
        <Box
          onMouseEnter={(e) => {
            e.stopPropagation();
            setIsTooltipOpen(true);
          }}
          onMouseLeave={(e) => {
            e.stopPropagation();
            setIsTooltipOpen(false);
          }}
        >
          <Checkbox
            colorScheme="green"
            defaultChecked={!!collected ? true : undefined}
            readOnly
          >
            {variant}
          </Checkbox>
          {subtitle && <Text as="sub">({subtitle})</Text>}
        </Box>
      </Tooltip>
    </Box>
  );
};

export default Card;
