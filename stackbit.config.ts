import { defineStackbitConfig, type SiteMapEntry } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

const landingPageModel = {
  name: "LandingPage",
  type: "page",
  label: "Landing Page",
  urlPath: "/{slug}",
  filePath: "content/pages/{slug}.json",
  fields: [
    { name: "slug", type: "string", required: true },
    { name: "title", type: "string", required: true },
    { name: "description", type: "string", required: true },
    {
      name: "header",
      type: "object",
      fields: [
        { name: "logoText", type: "string", required: true },
        {
          name: "navItems",
          type: "list",
          items: {
            type: "object",
            fields: [
              { name: "label", type: "string", required: true },
              { name: "targetId", type: "string", required: true }
            ],
          },
        },
      ],
    },
    {
      name: "hero",
      type: "object",
      fields: [
        { name: "heading", type: "string", required: true },
        { name: "highlight", type: "string", required: true },
        { name: "description", type: "string", required: true },
        {
          name: "primaryActions",
          type: "list",
          items: {
            type: "object",
            fields: [
              { name: "label", type: "string", required: true },
              { name: "href", type: "string", required: true },
              { name: "icon", type: "string", required: true },
            ],
          },
        },
        {
          name: "secondaryAction",
          type: "object",
          fields: [
            { name: "label", type: "string", required: true },
            { name: "href", type: "string", required: true },
          ],
          required: false,
        },
        {
          name: "phonePlaceholder",
          type: "object",
          fields: [
            { name: "label", type: "string", required: true },
            { name: "caption", type: "string", required: true },
          ],
        },
      ],
    },
    {
      name: "whyLustra",
      type: "object",
      fields: [
        { name: "title", type: "string", required: true },
        {
          name: "items",
          type: "list",
          items: {
            type: "object",
            fields: [
              { name: "title", type: "string", required: true },
              { name: "icon", type: "string", required: true },
            ],
          },
        },
      ],
    },
    {
      name: "features",
      type: "object",
      fields: [
        { name: "title", type: "string", required: true },
        {
          name: "items",
          type: "list",
          items: {
            type: "object",
            fields: [
              { name: "title", type: "string", required: true },
              { name: "description", type: "string", required: true },
              { name: "icon", type: "string", required: true },
            ],
          },
        },
        {
          name: "cta",
          type: "object",
          fields: [
            { name: "label", type: "string", required: true },
            { name: "href", type: "string", required: true },
          ],
          required: false,
        },
      ],
    },
    {
      name: "referral",
      type: "object",
      fields: [
        { name: "title", type: "string", required: true },
        { name: "description", type: "string", required: true },
        { name: "buttonLabel", type: "string", required: true },
      ],
    },
    {
      name: "creators",
      type: "object",
      fields: [
        { name: "title", type: "string", required: true },
        { name: "description", type: "string", required: true },
        { name: "buttonLabel", type: "string", required: true },
        { name: "buttonHref", type: "string", required: true },
      ],
    },
    {
      name: "testimonial",
      type: "object",
      fields: [
        { name: "quote", type: "string", required: true },
        { name: "attribution", type: "string", required: true },
      ],
    },
    {
      name: "pricing",
      type: "object",
      fields: [
        { name: "title", type: "string", required: true },
        { name: "subtitle", type: "string", required: true },
        { name: "ctaLabel", type: "string", required: true },
        { name: "ctaHref", type: "string", required: true },
      ],
    },
    {
      name: "contact",
      type: "object",
      fields: [
        { name: "title", type: "string", required: true },
        { name: "description", type: "string", required: true },
        { name: "ctaLabel", type: "string", required: true },
        { name: "email", type: "string", required: true },
      ],
    },
    {
      name: "footer",
      type: "object",
      fields: [
        { name: "logoText", type: "string", required: true },
        {
          name: "links",
          type: "list",
          items: {
            type: "object",
            fields: [
              { name: "label", type: "string", required: true },
              { name: "href", type: "string", required: true },
              { name: "type", type: "string", required: true },
            ],
          },
        },
        { name: "legalEntity", type: "string", required: true },
      ],
    },
  ],
};

const legalPageModel = {
  name: "LegalPage",
  type: "page",
  label: "Legal Page",
  urlPath: "/{slug}",
  filePath: "content/pages/{slug}.json",
  fields: [
    { name: "slug", type: "string", required: true },
    { name: "title", type: "string", required: true },
    { name: "lastUpdated", type: "string", required: true },
    { name: "intro", type: "string", required: true },
    {
      name: "sections",
      type: "list",
      items: {
        type: "object",
        fields: [
          { name: "title", type: "string", required: true },
          { name: "body", type: "string" },
          {
            name: "items",
            type: "list",
            items: { type: "string" },
          },
          {
            name: "subsections",
            type: "list",
            items: {
              type: "object",
              fields: [
                { name: "title", type: "string", required: true },
                { name: "body", type: "string" },
                {
                  name: "items",
                  type: "list",
                  items: { type: "string" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      name: "contact",
      type: "object",
      fields: [
        { name: "email", type: "string" },
        {
          name: "addressLines",
          type: "list",
          items: { type: "string" },
        },
      ],
      required: false,
    },
  ],
};

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "18",
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [landingPageModel, legalPageModel],
    }),
  ],
  siteMap: ({ documents }) => {
    const supportedModels = new Set(["LandingPage", "LegalPage"]);

    return documents
      .filter((document) => supportedModels.has(document.modelName))
      .map((document) => {
        const slug: string | undefined =
          document.data?.slug ?? document.id.split("/").pop()?.replace(/\.json$/u, "");

        if (!slug) {
          return null;
        }

        const isLandingPage = document.modelName === "LandingPage";
        const isHomePage = isLandingPage && (slug === "index" || slug === "home");
        const urlPath = isHomePage ? "/" : `/${slug}`;

        return {
          stableId: document.id,
          urlPath,
          document,
          isHomePage,
        } satisfies SiteMapEntry;
      })
      .filter((entry): entry is SiteMapEntry => Boolean(entry));
  },
});
