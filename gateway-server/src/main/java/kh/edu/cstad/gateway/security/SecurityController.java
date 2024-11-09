package kh.edu.cstad.gateway.security;

import kh.edu.cstad.gateway.dto.UserProfile;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class SecurityController {

    @GetMapping("/profile")
    public ResponseEntity<UserProfile> secured(@AuthenticationPrincipal Authentication auth) {
        if (auth == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User is not authenticated");
        }

        if (auth instanceof OAuth2AuthenticationToken oauth2) {
            OidcUser oidcUser = (OidcUser) oauth2.getPrincipal();

            UserProfile profile = new UserProfile(
                    oidcUser.getName(),
                    oidcUser.getIdToken().getTokenValue(),
                    oidcUser.getIdToken().getSubject()
            );
            return ResponseEntity.ok(profile);
        } else {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid authentication type");
        }
    }
}