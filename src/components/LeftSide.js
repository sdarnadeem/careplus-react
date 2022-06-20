import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

import content from "./leftSideContent";
import c from "./LeftSide.module.css";
import { Typography } from "@mui/material";

const LeftSide = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const navigate = useNavigate();

  const activeTab = tab === undefined ? "dashboard" : tab;

  const handleLogout = () => {
    navigate("/", { replace: true });
  };

  const logout = (slug, text) => {
    if (slug === "logout") {
      return (
        <Typography
          sx={{ cursor: "pointer" }}
          onClick={handleLogout}
          variant="body"
        >
          {text}
        </Typography>
      );
    } else {
      return "";
    }
  };

  const renderItem = (id, Icon, text, slug) => {
    return (
      <Stack
        className={activeTab === slug && c.activeTab}
        direction="row"
        alignItems="center"
        spacing={1}
        key={id}
      >
        <Icon />
        {logout(slug, text)}
        {slug !== "logout" && (
          <Link className={c.link} to={`?tab=${slug}`}>
            {text}
          </Link>
        )}
      </Stack>
    );
  };
  return (
    <Stack
      style={{ padding: "10px" }}
      spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {content.map((item, i) => renderItem(i, item.icon, item.text, item.slug))}
    </Stack>
  );
};

export default LeftSide;
