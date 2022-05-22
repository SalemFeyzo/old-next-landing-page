import { useState, useRef } from "react";
import { Box, Card, Text, Heading, Button, Input, Spinner } from "theme-ui";
import emailjs from "@emailjs/browser";
import React from "react";
import List from "./list";

export default function PriceCard({
  data: {
    header,
    name,
    description,
    priceWithUnit,
    buttonText = "Start",
    anotherOption,
    points,
  },
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    if (email) {
      setLoading(true);
      emailjs
        .sendForm(
          // process.env.EMAILJS_SERVICE_ID,
          "service_bfjsc0e",
          // process.env.EMAILJS_TEMPLATE_ID,
          "template_vxmmrnk",
          form.current,
          // process.env.EMAILJS_PUBLIC_KEY
          "K5PAZTNd8f72D42nM"
        )
        .then(
          (result) => {
            setLoading(false);
            setError(false);
            setSubmitted(true);
            setMessage("Thank you!");
            console.log(result.text);
          },
          (error) => {
            setError(true);
            setMessage("Network Error");
            console.log(error.text);
          }
        );
    } else {
      setError(true);
      setMessage("Email is required");
    }
  };

  return (
    <Card
      className={header ? "package__card active" : "package__card"}
      sx={styles.pricingBox}
    >
      {header && <Text sx={styles.header}>{header}</Text>}
      <Box>
        <Box className="package__header" sx={styles.pricingHeader}>
          <Heading className="package__name" variant="title">
            {name}
          </Heading>
          <Text as="p">{description}</Text>
        </Box>
        <List items={points} childStyle={styles.listItem} />

        <Box as="form" ref={form} sx={styles.order} onSubmit={submitHandler}>
          <Input
            type="email"
            defaultValue={email}
            placeholder="Enter your email!"
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea name="message" defaultValue={`I need ${name}. `} hidden />
          {loading ? (
            error ? (
              <Button type="submit">Order Again</Button>
            ) : (
              <Spinner />
            )
          ) : error ? (
            <Button type="submit">Order Again</Button>
          ) : submitted === false ? (
            <Button type="submit">Order Now</Button>
          ) : (
            ""
          )}

          {message && (
            <Text as="p" style={{ color: `${error ? "red" : "green"}` }}>
              {message}
            </Text>
          )}
        </Box>
      </Box>
    </Card>
  );
}

const styles = {
  pricingBox: {
    borderRadius: 20,
    position: "relative",
    transition: "all 0.3s",
    p: ["35px 25px", null, null, "40px"],
    width: ["100%", "75%", "100%"],
    mb: "40px",
    mt: "40px",
    mx: [0, "auto", 0],
    "&:before": {
      position: "absolute",
      content: "''",
      width: "100%",
      top: 0,
      left: 0,
      height: "100%",
      border: "1px solid rgba(38, 78, 118, 0.1)",
      borderRadius: "inherit",
      transition: "all 0.3s",
      zIndex: -1,
    },
    "&:hover": {
      boxShadow: "0px 4px 25px rgba(38, 78, 118, 0.1) !important",
      "&:before": {
        opacity: 0,
      },
    },
  },
  header: {
    height: ["28px", null, null, "32px"],
    backgroundColor: "yellow",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: 1,
    lineHeight: 1.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "absolute",
    top: "-17px",
    letterSpacing: "-.14px",
    px: "12px",
  },
  pricingHeader: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    mb: ["30px", null, null, null, "40px"],
    p: {
      fontSize: [1, 2],
      color: "text",
      lineHeight: "heading",
    },
    ".package__name": {
      marginBottom: [1, null, 2],
    },
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, "30px"],
    lineHeight: 1,
    letterSpacing: "-0.55px",
    color: "text",
    marginBottom: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: [4, 6],
    "> span": {
      position: "relative",
      pl: "3px",
      display: "inline-block",
      fontSize: [1, 2],
      fontWeight: "normal",
    },
  },
  order: {
    color: "text",
    marginBottom: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
  },
  listItem: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: "flex-start",
    color: "text",
    "&.closed": {
      opacity: 0.55,
      button: {
        color: "#788FB5",
      },
    },
  },
  buttonGroup: {
    textAlign: "center",
    mt: ["30px", null, null, null, "35px"],
    ".free__trial": {
      color: "secondary",
      width: "100%",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: ["14px", 1],
      p: "20px 0 0",
    },
  },
};
