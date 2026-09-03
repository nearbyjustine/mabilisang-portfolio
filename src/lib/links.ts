/**
 * Featured work mixes in-page anchors (private client systems, routed to the
 * contact form) with live external sites. The two are not interchangeable:
 * an in-page anchor must never open in a new tab.
 */
export function isInternalLink(link: string): boolean {
	return link.startsWith("#");
}

/** `target`/`rel` pair for an anchor, derived from the link itself. */
export function linkTargetProps(link: string): {
	target?: "_blank";
	rel?: "noreferrer";
} {
	return isInternalLink(link) ? {} : { target: "_blank", rel: "noreferrer" };
}

/** Host of an external link, or null for an in-page anchor. */
export function externalHost(link: string): string | null {
	if (isInternalLink(link)) return null;
	try {
		return new URL(link).hostname.replace(/^www\./, "");
	} catch {
		return null;
	}
}

/** The action a project link actually performs, in the site's own language. */
export function projectLinkLabel(link: string): string {
	const host = externalHost(link);
	return host ? `Open ${host}` : "Ask me about this work";
}
